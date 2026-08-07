import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Input } from "../ui/input";
import { useFormContext } from "react-hook-form";

interface Props {
  className?: string;
  label?: string;
  name: string;
  imgUrl?: string;
}

export const FormInputImage: React.FC<Props> = ({
  className,
  name,
  label,
  imgUrl,
}) => {
  const [preview, setPreview] = useState<string>(imgUrl || "");
  const {
    setValue,
    formState: { errors },
  } = useFormContext();

  const isError = errors[name]?.message;

  // Ապահովում ենք Blob URL-ի մաքրումը հիշողությունից (Memory Leak-ից խուսափելու համար)
  useEffect(() => {
    return () => {
      if (preview && preview.startsWith("blob:")) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const objectUrl = URL.createObjectURL(file);
    setPreview(objectUrl);

    // Թարմացնում ենք ձևաթղթի արժեքը և թույլ տալիս validation-ին աշխատել
    setValue(name, file, { shouldDirty: true, shouldValidate: true });
  };

  return (
    <div className={cn("relative w-25", className)}>
      {label && <span className="block mb-1 text-sm">{label}</span>}

      <div className="relative w-full h-25 overflow-hidden rounded-md border bg-muted">
        {preview ? (
          <Image
            className="w-full h-full object-cover"
            src={preview}
            alt="Preview"
            width={100}
            height={100}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-xs text-muted-foreground">
            Ընտրեք նկար
          </div>
        )}
      </div>

      <Input
        className="absolute inset-0 opacity-0 w-full h-full cursor-pointer z-10"
        name={name}
        type="file"
        accept="image/*"
        onChange={handleImageChange}
      />

      {isError && (
        <span className="text-xs text-red-500 mt-1 block">
          {isError as string}
        </span>
      )}
    </div>
  );
};
