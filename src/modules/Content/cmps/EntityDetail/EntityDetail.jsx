import React from "react";
import "./EntityDetail.scss";

const OperatorDetails = () => {
  const mockData = {
    operatorId: "4468becd-2222-40da-9603-cbaca138a8a9",
    friendlyName: "Microsoft PPE (Dogfood)",
    trustedIssuers: [
      "https://login.microsoftonline.com/cdc5aeea-15c5-4db6-b079-fcadd2505dc2/v2.0",
      "https://sts.windows-ppe.net/f686d426-8d16-4d2b-81b7-ab578e110ccd/",
      "https://login.windows-ppe.net/f686d426-8d16-4d2b-81b7-ab578e110ccd/v2.0",
      "https://sts.windows.net/72f988bf-86f1-41af-91ab-2d7cd011db47/",
      "https://login.microsoftonline.com/72f988bf-86f1-41af-91ab-2d7cd011db47/v2.0",
      "https://sts.windows.net/cdc5aeea-15c5-4db6-b079-fcadd2505dc2/",
    ],
    landingPage: "https://df.onecloud.azure-test.net/",
    logoUrl:
      "https://operatordatae2e.blob.core.windows.net/logos/4468becd-2222-40da-9603-cbaca138a8a9.jpg",
  };

  // Функция для получения доменного имени из ссылки
  const getDomainName = (url) => {
    const urlObj = new URL(url);
    return urlObj.hostname;
  };

  return (
    <div className="entity-details">
      <h2>Operator Details:</h2>
      <div className="detail-section">
        <div className="detail-row">
          <span className="label">Operator ID:</span>
          <span className="value">{mockData.operatorId}</span>
        </div>
        <div className="detail-row">
          <span className="label">Friendly Name:</span>
          <span className="value">{mockData.friendlyName}</span>
        </div>
        <div className="detail-row">
          <span className="label">Trusted Issuers:</span>
          <ul>
            {mockData.trustedIssuers.map((issuer, index) => (
              <li key={index} className="link-wrapper">
                <a
                  href={issuer}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-full-url={issuer}
                >
                  {getDomainName(issuer)}
                </a>
                <div className="tooltip">{issuer}</div>
              </li>
            ))}
          </ul>
        </div>
        <div className="detail-row">
          <span className="label">Landing Page:</span>
          <a
            href={mockData.landingPage}
            target="_blank"
            rel="noopener noreferrer"
            className="link-wrapper"
            data-full-url={mockData.landingPage}
          >
            {getDomainName(mockData.landingPage)}
            <div className="tooltip">{mockData.landingPage}</div>
          </a>
        </div>
        <div className="detail-row">
          <span className="label">Logo URL:</span>
          <a
            href={mockData.logoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="link-wrapper"
            data-full-url={mockData.logoUrl}
          >
            {getDomainName(mockData.logoUrl)}
            <div className="tooltip">{mockData.logoUrl}</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default OperatorDetails;

//
// const OperatorDetails = () => {
//     // Мок-данные
//     const mockData = {
//         operatorId: "4468becd-2222-40da-9603-cbaca138a8a9",
//         friendlyName: "Microsoft PPE (Dogfood)",
//         trustedIssuers: [
//             "https://login.microsoftonline.com/cdc5aeea-15c5-4db6-b079-fcadd2505dc2/v2.0",
//             "https://sts.windows-ppe.net/f686d426-8d16-4d2b-81b7-ab578e110ccd/",
//             "https://login.windows-ppe.net/f686d426-8d16-4d2b-81b7-ab578e110ccd/v2.0",
//             "https://sts.windows.net/72f988bf-86f1-41af-91ab-2d7cd011db47/",
//             "https://login.microsoftonline.com/72f988bf-86f1-41af-91ab-2d7cd011db47/v2.0",
//             "https://sts.windows.net/cdc5aeea-15c5-4db6-b079-fcadd2505dc2/",
//         ],
//         landingPage: "https://df.onecloud.azure-test.net/",
//         logoUrl:
//             "https://operatordatae2e.blob.core.windows.net/logos/4468becd-2222-40da-9603-cbaca138a8a9.jpg",
//     };
//
//     return (
//         <div className="operator-details">
//             <h2>Operator Details</h2>
//             <div className="detail-row">
//                 <span className="label">Operator ID:</span>
//                 <span className="value">{mockData.operatorId}</span>
//             </div>
//             <div className="detail-row">
//                 <span className="label">Friendly Name:</span>
//                 <span className="value">{mockData.friendlyName}</span>
//             </div>
//             <div className="detail-row">
//                 <span className="label">Trusted Issuers:</span>
//                 <div className="value">
//                     <ul>
//                         {mockData.trustedIssuers.map((issuer, index) => (
//                             <li key={index}>
//                                 <a href={issuer} target="_blank" rel="noopener noreferrer">
//                                     {issuer}
//                                 </a>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             </div>
//             <div className="detail-row">
//                 <span className="label">Landing Page:</span>
//                 <span className="value">
//           <a href={mockData.landingPage} target="_blank" rel="noopener noreferrer">
//             {mockData.landingPage}
//           </a>
//         </span>
//             </div>
//             <div className="detail-row">
//                 <span className="label">Logo URL:</span>
//                 <span className="value">
//           <a href={mockData.logoUrl} target="_blank" rel="noopener noreferrer">
//             {mockData.logoUrl}
//           </a>
//         </span>
//             </div>
//         </div>
//     );
// };
//
// export default OperatorDetails;
