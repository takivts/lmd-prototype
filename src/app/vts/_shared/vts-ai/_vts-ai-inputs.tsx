"use client";

import { motion } from "framer-motion";

interface VtsAiInputsProps {
  variants: any;
}

export default function VtsAiInputs({ variants }: VtsAiInputsProps) {
  return (
    <motion.div className="flex gap-2" variants={variants}>
      <label className="flex flex-1 flex-col text-xs">
        Submarket
        <select className="mb-2 flex-1 rounded-lg border border-gray-300 p-2 text-gray-700 focus:outline-none">
          <option value="">Select a submarket</option>
          <option value="houston">Houston</option>
          <option value="austin">Austin</option>
          <option value="washington-dc">Washington DC</option>
          <option value="orange-county">Orange County</option>
          <option value="chicago">Chicago</option>
          <option value="boston">Boston</option>
          <option value="orlando">Orlando</option>
          <option value="charlotte">Charlotte</option>
          <option value="nashville">Nashville</option>
          <option value="seattle">Seattle</option>
          <option value="suburban-md">Suburban MD</option>
          <option value="silicon-valley">Silicon Valley</option>
          <option value="toronto">Toronto</option>
          <option value="new-york">New York</option>
          <option value="tampa">Tampa</option>
          <option value="seattle-eastside">Seattle Eastside</option>
          <option value="fort-lauderdale">Fort Lauderdale</option>
          <option value="san-francisco">San Francisco</option>
          <option value="los-angeles">Los Angeles</option>
          <option value="san-diego">San Diego</option>
          <option value="san-francisco-east-bay">San Francisco East Bay</option>
          <option value="miami">Miami</option>
          <option value="raleigh">Raleigh</option>
          <option value="dallas-fort-worth">Dallas - Fort Worth</option>
          <option value="denver">Denver</option>
          <option value="greater-boston">Greater Boston</option>
          <option value="phoenix">Phoenix</option>
          <option value="northern-va">Northern VA</option>
          <option value="atlanta">Atlanta</option>
          <option value="calgary">Calgary</option>
        </select>
      </label>

      <label className="flex flex-1 flex-col text-xs">
        Market
        <select className="mb-2 flex-1 rounded-lg border border-gray-300 p-2 text-gray-700 focus:outline-none">
          <option value="">Select a market</option>
          <option value="lease">Lease</option>
          <option value="sale">Sale</option>
        </select>
      </label>

      <label className="flex flex-1 flex-col text-xs">
        Building class
        <select className="mb-2 flex-1 rounded-lg border border-gray-300 p-2 text-gray-700 focus:outline-none">
          <option value="">Select building class</option>
          <option value="class-a">Class A</option>
          <option value="class-b">Class B</option>
          <option value="class-c">Class C</option>
        </select>
      </label>
    </motion.div>
  );
}
