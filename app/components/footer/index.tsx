import { Svg, Text, useCursor, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { isMobile } from "react-device-detect";
import * as THREE from "three";
import { FOOTER_LINKS } from "../../constants";
import { FooterLink } from "../../types";

const FooterLinkItem = ({ link }: { link: FooterLink }) => {
  const textRef = useRef<THREE.Group>(null);
  const svgRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  const onPointerOver = () => setHovered(true);
  const onPointerOut = () => setHovered(false);
  const onClick = () => window.open(link.url, '_blank');
  const onPointerMove = (e: MouseEvent) => {
    if (isMobile) return;
    const hoverDiv = document.getElementById(`footer-link-${link.name}`);
    gsap.to(hoverDiv, {
      top: `${e.clientY + 14}px`,
      left: `${e.clientX}px`,
      duration: 0.6,
    });
  };

  const fontProps = {
    font: "./Vercetti-Regular.woff",
    fontSize: isMobile ? 0.15 : 0.2,
    color: 'white',
    anchorX: 'center' as const,
    anchorY: 'middle' as const,
  };

  useEffect(() => {
    if (!document.getElementById(`footer-link-${link.name}`)) {
      const hoverDiv = document.createElement('div');
      hoverDiv.id = `footer-link-${link.name}`;
      hoverDiv.textContent = link.hoverText ?? link.name.toUpperCase();
      hoverDiv.style.position = 'fixed';
      hoverDiv.style.zIndex = '2';
      hoverDiv.style.bottom = '0';
      hoverDiv.style.opacity = '0';
      hoverDiv.style.left = window.innerWidth / 2 + 'px';
      hoverDiv.style.fontSize = '0.8rem';
      hoverDiv.style.pointerEvents = 'none';
      document.body.appendChild(hoverDiv);
    }
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const hoverDiv = document.getElementById(`footer-link-${link.name}`);

    if (hovered) {
      gsap.fromTo(hoverDiv, { opacity: 0 }, { opacity: 0.5, delay: 0.2 });
    } else {
      gsap.to(hoverDiv, { opacity: 0 });
    }

    gsap.to(textRef.current, {
      letterSpacing: hovered ? 0.3 : 0,
      duration: 0.3,
    });

    if (svgRef.current) {
      gsap.to(svgRef.current.scale, {
        x: hovered ? 0.0018 : 0.0015,
        y: hovered ? 0.0018 : 0.0015,
        z: hovered ? 0.0018 : 0.0015,
        duration: 0.3,
      });
      gsap.to(svgRef.current.position, {
        x: hovered ? -0.23 : -0.192,
        duration: 0.3,
      });
    }

    return () => {
      gsap.killTweensOf(hoverDiv);
      gsap.killTweensOf(textRef.current);
      if (svgRef.current) gsap.killTweensOf(svgRef.current);
    };
  }, [hovered]);

  useCursor(hovered);

  const iconScale = 0.0015;
  const iconX = -(256 * iconScale) / 2;

  return (
    <group
      onClick={onClick}
      onPointerOver={onPointerOver}
      onPointerOut={onPointerOut}
      onPointerMove={(e) => onPointerMove(e as unknown as MouseEvent)}
    >
      <group ref={svgRef} position={[iconX, isMobile ? 0.38 : 0.46, 0]} scale={iconScale}>
        <Svg src={link.icon} />
      </group>
      <Text ref={textRef} position={[0, 0, 0]} {...fontProps}>
        {link.name.toUpperCase()}
      </Text>
    </group>
  );
};

const Footer = () => {
  const groupRef = useRef<THREE.Group>(null);
  const data = useScroll();

  useFrame(() => {
    const d = data.range(0.8, 0.2);
    if (groupRef.current) {
      groupRef.current.visible = d > 0;
    }
  });

  const spacing = isMobile ? 1.2 : 2.2;
  const startX = -((FOOTER_LINKS.length - 1) * spacing) / 2;

  const getLinks = () => {
    return FOOTER_LINKS.map((link, i) => {
      return (
        <group key={i} position={[i * spacing, 0, 0]}>
          <FooterLinkItem link={link}/>
        </group>
      );
    });
  };

  return (
    <group position={[0, -44, 18]} rotation={[-Math.PI / 2, 0, 0]} ref={groupRef}>
      <group position={[startX, 0, 0]}>
        { getLinks() }
      </group>
    </group>
  );
};

export default Footer;