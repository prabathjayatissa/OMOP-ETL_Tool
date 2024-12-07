import { Patient, Condition, Medication } from '../types';

export const syntheticPatients: Patient[] = [
  {
    id: "P001",
    gender: "F",
    birthDate: "1985-03-15",
    race: "White",
    ethnicity: "Non-Hispanic"
  },
  {
    id: "P002",
    gender: "M",
    birthDate: "1972-08-22",
    race: "Black",
    ethnicity: "Non-Hispanic"
  },
  {
    id: "P003",
    gender: "F",
    birthDate: "1990-11-30",
    race: "Asian",
    ethnicity: "Hispanic"
  }
];

export const syntheticConditions: Condition[] = [
  {
    id: "C001",
    patientId: "P001",
    code: "E11.9",
    description: "Type 2 diabetes mellitus without complications",
    startDate: "2020-01-15"
  },
  {
    id: "C002",
    patientId: "P001",
    code: "I10",
    description: "Essential hypertension",
    startDate: "2019-06-22"
  },
  {
    id: "C003",
    patientId: "P002",
    code: "J45.909",
    description: "Unspecified asthma, uncomplicated",
    startDate: "2021-03-10"
  }
];

export const syntheticMedications: Medication[] = [
  {
    id: "M001",
    patientId: "P001",
    code: "316153",
    name: "Metformin 500mg",
    startDate: "2020-01-20",
    dosage: "500mg daily"
  },
  {
    id: "M002",
    patientId: "P001",
    code: "197361",
    name: "Lisinopril 10mg",
    startDate: "2019-06-25",
    dosage: "10mg daily"
  },
  {
    id: "M003",
    patientId: "P002",
    code: "573621",
    name: "Albuterol inhaler",
    startDate: "2021-03-15",
    dosage: "2 puffs as needed"
  }
];
