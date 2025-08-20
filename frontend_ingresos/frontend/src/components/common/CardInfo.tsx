
import { FileUser } from "lucide-react";

interface CardInfoProps {
  title: string;
  value: number;
}

export default function CardInfo({ title, value }: CardInfoProps) {
  return (
    <>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow flex flex-col justify-center items-center">
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 bg-blue-100 rounded-lg">
            <FileUser className="w-6 h-6 text-blue-600" />
          </div>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-3xl font-bold text-gray-900 mb-1">S/{value}</p>
      </div>
    </>
  );
}
