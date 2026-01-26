type Props = {
  title: string;
  value: string;
  color: string;
};

export default function StatCard({ title, value, color }: Props) {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm">
      <p className="text-sm text-slate-400">{title}</p>
      <h2 className={`mt-2 text-2xl font-bold ${color}`}>{value}</h2>
    </div>
  );
}
