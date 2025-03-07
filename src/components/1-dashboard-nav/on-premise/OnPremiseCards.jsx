import { Card, CardHeader, CardBody, Image } from "@heroui/react";
import databaseIcon from "../../../assets/icons/databaseIcon.svg";
import serverIcon from "../../../assets/icons/serverIcon.svg";
import { div } from "framer-motion/client";

export default function OnPremiseCards() {
  return (
    <>
      <Card className="bg-neutral-900 w-[260px] h-[200px] flex flex-col items-center justify-between border-2 border-neutral-700 rounded-xl">
        <CardBody className="flex items-center justify-center flex-grow py-4">
          <Image
            alt="Server icon"
            className="object-contain"
            src={serverIcon}
            width={80}
            height={80}
          />
        </CardBody>
        <CardHeader className="w-full flex justify-center items-center pb-4">
          <p className="text-base font-bold">Servers</p>
        </CardHeader>
      </Card>

      <Card className="bg-neutral-900 w-[260px] h-[200px] flex flex-col items-center justify-between border-2 border-neutral-700 rounded-xl">
        <CardBody className="flex items-center justify-center flex-grow py-4">
          <Image
            alt="Database icon"
            className="object-contain"
            src={databaseIcon}
            width={100}
            height={100}
          />
        </CardBody>
        <CardHeader className="w-full flex justify-center items-center pb-4">
          <p className="text-base font-bold">Database</p>
        </CardHeader>
      </Card>
    </>
  );
}
