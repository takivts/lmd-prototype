"use client";

import {
  ColumnDef,
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import { Deal, DealsTableProps } from "./_types";

const columns: ColumnDef<Deal>[] = [
  { header: "Tenant", accessorKey: "tenant" },
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
    <div className="w-full overflow-x-auto">
      <table className="w-full table-auto border-collapse border border-gray-200 text-sm text-gray-700">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="border-b border-gray-200 bg-gray-100 px-3 py-2 text-left"
                >
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
        <tbody className="border-gray-200">
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className="border-b border-gray-200 px-3 py-2"
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
