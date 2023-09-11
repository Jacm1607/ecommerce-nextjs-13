import ListSubcategory from "@/components/page/listSubcategory";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { URL_BASE } from "@/lib/endpoint";

export default function CategoryHome({ params }: any) {
  const { categoria } = params;

  return (
    <>
      <div className="">
        <div className="border-t">
          <div className="bg-background">
            <div className="grid lg:grid-cols-5">
              <Sidebar className="hidden lg:block" />
              <div className="col-span-3 lg:col-span-4 lg:border-l">
                <div className="h-full px-4 py-6 lg:px-8">
                  <div defaultValue="music" className="h-full space-y-6">
                    <div
                      className="border-none p-0 outline-none"
                    >
                      <ListSubcategory categoria={categoria} />
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export function Sidebar({ className, playlists }: any) {
  return (
    <div>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Ordenar por
          </h2>
          <div className="space-y-1 mx-8">
            <RadioGroup defaultValue="asc">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="asc" id="r1" />
                <Label htmlFor="r1">Precio ascendente</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="desc" id="r3" />
                <Label htmlFor="r3">Precio descendente</Label>
              </div>
            </RadioGroup>
          </div>
        </div>
      </div>
    </div>
  )
}