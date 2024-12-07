export interface Patient {
  id: string;
  gender: string;
  birthDate: string;
  race: string;
  ethnicity: string;
}

export interface Condition {
  id: string;
  patientId: string;
  code: string;
  description: string;
  startDate: string;
  endDate?: string;
}

export interface Medication {
  id: string;
  patientId: string;
  code: string;
  name: string;
  startDate: string;
  endDate?: string;
  dosage: string;
}

export interface MappingRule {
  sourceField: string;
  targetTable: string;
  targetField: string;
  transformationRule?: string;
}
