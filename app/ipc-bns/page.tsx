import type { Metadata } from "next";
import IpcBnsClient from "./IpcBnsClient";

export const metadata: Metadata = {
  title: "IPC → BNS — Section Mapper",
  description:
    "Search any IPC section — find its Bharatiya Nyaya Sanhita 2023 equivalent, the punishment, and what changed in plain English.",
};

export default function IpcBnsPage() {
  return <IpcBnsClient />;
}
