export const Apeal = () => {
  const examples: any = [
    { service: "相談・見積もり", prices: [0, 0, 0] },
    { service: "基本料金", prices: [0, 5500, 8800] },
    { service: "OS復旧・設定", prices: [6000, 7700, 13200] },
    { service: "ブラウザ・ファイル共有設定", prices: [9000, 11000, 14300] },
    { service: "DXレッスン", prices: [8000, 13200, 11000] },
    { service: "プリンター接続", prices: [4400, 5500, 6600] }
  ];

  const Examples = ({ examples }: any) => {

    const list = examples.map((examples: any) => {
      return (
        <tr className="border-b border-gray-200 bg-gray-50">
          {/* 1列目 */}
          <th scope="row" className="px-3 md:px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50  ">
            {examples.service}
          </th>
          {/* ２列目 */}
          <td className="px-3 md:px-6 py-4 bg-red-300 text-slate-800 whitespace-nowrap text-right">
            {`${examples.prices[0]}円`}
          </td>
          {/* ３列目 */}
          <td className="px-3 md:px-6 py-4 bg-inherit whitespace-nowrap text-right">
            {`${examples.prices[1]}円`}
          </td>
          {/* 4列目 */}
          <td className="px-3 md:px-6 py-4 bg-inherit whitespace-nowrap text-right">
            {`${examples.prices[2]}円`}
          </td>
        </tr>
      )
    })

    return (
      <>{list}</>
    );
  }
  return (
    <div>
      <h2>参考価格<span className="text-base">（家電量販店Aと修理業者B）</span></h2>
      <div className="relative md:w-2/3 md:m-auto overflow-x-auto shadow-md rounded-lg border-[1px] border-slate-800">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase">
            <tr>
              <th scope="col" className="px-3 md:px-6 py-3 border-b-[1px] border-slate-800 bg-gray-50 ">
                サービス
              </th>
              <th scope="col" className="px-3 md:px-6 py-3 border-b-[1px] border-slate-800 bg-red-300 text-center">
                私たち
              </th>
              <th scope="col" className="px-3 md:px-6 py-3 border-b-[1px] border-slate-800 bg-inherit text-center">
                A社
              </th>
              <th scope="col" className="px-3 md:px-6 py-3 border-b-[1px] border-slate-800 bg-inherit text-center">
                B社
              </th>
            </tr>
          </thead>
          <tbody className="bg-gray-50">
            <Examples examples={examples} />
          </tbody>
        </table>
      </div>
    </div>
  )
}