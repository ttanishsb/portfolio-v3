import * as THREE from "three";
import { WorkTimelinePoint } from "../types";

export const WORK_TIMELINE: WorkTimelinePoint[] = [
  {
    point: new THREE.Vector3(0, 0, 0),
    year: '2023',
    title: 'Indian Science Olympiad',
    subtitle: 'School Rank 2',
    position: 'right',
  },
  {
    point: new THREE.Vector3(-4, -4, -3),
    year: '2025',
    title: 'Army Public School, Gangtok',
    subtitle: 'CBSE Class X',
    position: 'left',
  },
  {
    point: new THREE.Vector3(-3, -1, -6),
    year: '2026',
    title: 'Pyrotech - School Tech Club',
    subtitle: 'Programmer',
    position: 'left',
  },
  {
    point: new THREE.Vector3(0, -1, -10),
    year: 'Expected 2027',
    title: 'Tagore International School, Vasant Vihar',
    subtitle: 'CBSE Class XII - PCM with Computer Science',
    position: 'left',
  },
  {
    point: new THREE.Vector3(1, 1, -12),
    year: new Date().toLocaleDateString('default', { year: 'numeric' }),
    title: 'Learning...',
    subtitle: 'Aspiring AI/ML Specialist',
    position: 'right',
  }
]