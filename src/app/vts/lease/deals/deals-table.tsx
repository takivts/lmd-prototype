"use client";

import {
  ColumnDef,
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import Link from "next/link";

export interface Deal {
  tenant: string;
  requirementSize: string;
  totalSize: string;
  asset: string;
  stage: string;
  ner: string;
  contact: string;
  comment: string;
  lastUpdated: string;
  link: string;
}

export interface DealsTableProps {
  data: Deal[];
}
const columns: ColumnDef<Deal>[] = [
  {
    header: "Tenant",
    accessorKey: "tenant",
    cell: ({ row }) => {
      return (
        <Link href={row.original.link} className="text-vts-purple-700">
          {row.original.tenant}
        </Link>
      );
    },
  },
  { header: "Requirement Size", accessorKey: "requirementSize" },
  { header: "Total Size", accessorKey: "totalSize" },
  { header: "Asset", accessorKey: "asset" },
  { header: "Stage", accessorKey: "stage" },
  { header: "NER/size/yr", accessorKey: "ner" },
  { header: "Contact", accessorKey: "contact" },
  { header: "Comment", accessorKey: "comment" },
  { header: "Last Updated", accessorKey: "lastUpdated" },
];

export default function DealsTable({ data }: DealsTableProps) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="w-full overflow-hidden overflow-x-auto rounded-md border border-gray-200">
      <table className="w-full text-sm text-gray-700">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="bg-gray-100 px-3 py-2 text-left">
                  <div className="truncate">
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr
              key={row.id}
              className="border-b border-gray-200 last:border-b-0"
            >
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className="px-3 py-2"
                  title={cell.getValue() as string}
                >
                  <div className="truncate">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
