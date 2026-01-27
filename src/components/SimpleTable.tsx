export default function SimpleTable({ rows }: { rows: Array<{ label: string; value: string }> }) {
  return (
    <div className="overflow-hidden rounded-2xl border bg-white/70 backdrop-blur">
      <table className="w-full text-sm">
        <tbody>
          {rows.map((r) => (
            <tr key={r.label} className="border-t first:border-t-0">
              <td className="w-1/2 px-4 py-3 text-neutral-600">{r.label}</td>
              <td className="px-4 py-3 font-semibold">{r.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
