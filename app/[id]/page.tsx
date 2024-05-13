import React from "react";

type Props = {
  params: {
    id: string;
  };
};

export async function generateStaticParams() {
  return [{ id: "6641c7e553cd44a735111e40" }];
}

export default function IdPage({ params }: Props) {
  return <div className="text-xl">{params.id}</div>;
}
