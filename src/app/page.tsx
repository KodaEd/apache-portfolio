import Art from "@/components/AsciiArt";
import Table from "@/components/table/Table";


export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">~/Edrick-Koda/Portfolio</h1>
      <Art/>
       {/* Table Header */}
       <div className="flex items-center gap-2 p-2 text-slate-600 border-b mb-2">
        <span className="flex-1 min-w-[200px] ml-10">Name</span>
        <div className="flex gap-8">
          <span className="w-24">Type</span>
          <span className="w-24 text-right">Size</span>
          <span className="w-32">Last Modified</span>
        </div>
      </div>

      <Table/>

      <div className="mt-2 pt-5 border-t">
        KodaSystems/7.7 Server at www.edrickkoda.com Port 80
      </div>
    </div>
  );
}
