import React from "react";

type Props = {
  params: {
    id: string;
  };
};

export async function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }];
}

export default function IdPage({ params }: Props) {
  return <div className="text-xl">{params.id}</div>;
}
