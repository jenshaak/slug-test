import React from "react";

type Props = {
  params: {
    id: string;
  };
};

export default function IdPage({ params }: Props) {
  return <div className="text-xl">{params.id}</div>;
}
