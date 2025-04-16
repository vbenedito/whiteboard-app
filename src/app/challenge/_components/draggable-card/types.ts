export interface DraggableCardProps {
  label: string;
  onDragStart: (event: React.DragEvent, type: string) => void;
}
