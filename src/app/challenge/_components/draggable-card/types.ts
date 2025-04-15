export interface DraggableCardProps {
  label: string;
  type: string;
  onDragStart: (event: React.DragEvent, type: string) => void;
}
