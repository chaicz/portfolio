import { ReactNode } from "react";

export interface NavItem {
  label: string;
  path: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface ProjectData {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
  component: ReactNode;
}

export interface HydroData {
  name: string;
  level: number;
  capacity: number;
}

export interface TariffTier {
  limit: number;
  rate: number;
}