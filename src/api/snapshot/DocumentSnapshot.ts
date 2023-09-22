export interface DocumentSnapshot {
  pdfSize: number;
  prevStartXRef: number;

  includeObject: (objectNumber: number) => void;
  shouldSave: (objectNumber: number) => boolean;
}
