import ListSubcategory from "@/components/page/listSubcategory";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function CategoryHome({ params }: any) {
  const { categoria } = params;

  return (
    <>
      <ListSubcategory categoria={categoria} />
    </>
  )
}

