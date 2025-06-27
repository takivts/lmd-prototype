async function getApprovalSettings() {
  const updateSince = '2025-01-01'

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      authorization: 'Basic cVM3RExEMGNzelhHYWI2M3dpYlFLV0t6aXE3RDdPNitQbzhSajJuZTR3RT06a0FFUVRPTVNIbnhEODlxdWU3ZllyTlpEQ0V1Y3QvK3dWeHhxWENzTXVNZz0='
    }
  };

  try {
    const response = await fetch(`https://api.vts.com/api/v1/deals?filter[updated_since]=${updateSince}`, options)
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching approval settings:', error);
    throw error;
  }
}

export default async function DealsPage() {
  const data = await getApprovalSettings();
  console.log(data.data);
  return (
    <div className="flex flex-col w-3xl mx-auto bg-white/10 rounded-lg px-4 mt-4">
      <ul>
        {data.data.map((item: any) => (
          <li key={item.id} className="flex justify-between not-last:border-b border-gray-700 py-4">
            <div className="flex flex-col">
              <span className="text-sm font-bold">{`${item.attributes.tenant_info.name}`}</span>
              <div className="flex flex-row gap-2">
                <span className="text-xs text-gray-400">{item.attributes?.stage}</span>
                <span className="text-xs text-gray-400">{`${item.attributes?.total_size?.magnitude} ${item.attributes?.total_size?.unit}`}</span>
              </div>
            </div>
            <div className="flex flex-col justify-center">
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
} 