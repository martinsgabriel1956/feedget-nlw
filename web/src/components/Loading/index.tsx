import { CircleNotch } from "phosphor-react";

export const Loading: React.FC = () => {
  return (
    <div className="w-6 h-6 flex items-center justify-center overflow-hidden animate-spin">
      <CircleNotch weight="bold" className="w-4 h-4" />
    </div>
  );
}