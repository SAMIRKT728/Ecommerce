import React from "react";
import { Button, IconButton, Typography } from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

export function BannerSection6() {
  return (
    <section className="py-20 container mx-auto">
      <div className="mb-4 shadow-sm px-4 py-2 flex flex-wrap lg:items-center lg:justify-center justify-end gap-x-6">
        <Typography variant="h6" color="blue-gray" className="text-md">
          NEW | Material Tailwind PRO, a comprehensive compilation of 200+
          sections, now available for your use!
        </Typography>
        <Button size="sm" variant="outlined">
          check out
        </Button>
        <IconButton variant="text">
          <XMarkIcon className="text-gray-900 w-4 h-4 stroke-2" />
        </IconButton>
      </div>
      <div className="mb-4 shadow-sm px-4 py-2 flex bg-gray-900 flex-wrap lg:items-center lg:justify-center justify-end gap-x-6">
        <Typography variant="h6" color="white" className="text-md">
          NEW | Material Tailwind PRO, a comprehensive compilation of 200+
          sections, now available for your use!
        </Typography>
        <Button color="white" size="sm">
          check out
        </Button>
        <IconButton color="white" variant="text">
          <XMarkIcon className="text-white w-4 h-4 stroke-2" />
        </IconButton>
      </div>
    </section>
  );
}

export default BannerSection6;