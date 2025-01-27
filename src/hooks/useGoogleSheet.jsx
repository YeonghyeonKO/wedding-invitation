/* eslint-disable no-alert, no-new, import/no-extraneous-dependencies */

import { GoogleSpreadsheet } from 'google-spreadsheet';
import { useEffect, useState } from 'react';

// 구글 시트 조회하는 로직
export const getGoogleSheet = async () => {
  try {
    const doc = new GoogleSpreadsheet(process.env.REACT_APP_GOOGLE_SPREADSHEET_ID);

    // 구글 인증
    const credentials = {
      type: 'service_account',
      project_id: 'wedding-invitation-posong',
      private_key_id: process.env.REACT_APP_GOOGLE_PRIVATE_KEY_ID,
      // private_key: process.env.REACT_APP_GOOGLE_PRIVATE_KEY,
      private_key: '-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDU67FH3DyK4VGE\nXCd6ImdTXlhFEr4dwSuHfaDI5przFXwNij2vMj6liDTwWGViu7gmMLK5oILJwYPt\nlD04pU3wLJMvPXn8m+3NqKpWNayxarphSc9eE+ZtCituX4WHH01A2/3mtclmEIgs\nwqhzrCy1gg3H+IUBhUZrtKLWlYVKlQb6AdoraG1p5GuOse6aYZ3ry9fiSzrjS5gn\nmdnEuu5rxV7SYtvW/liqaRY7jSFDuhN23nBYsQo5gxt0YaoMxvjYFbRNhbMRyexT\n2oif+7Mb2Xck/2hUCrhNKPmvhgLGQgG9isb8sqyewdi3Ib3EcOF6tLkpBDBcQUtl\nR9N+l+XnAgMBAAECggEAYvhXhF6T6b5IRO0NEJFzU+Yzw4+tvWjwEd/MX/YJKlrf\nOe/7Mjd5tTn12Y5NOjKlq2LRgMViZePEridMucrkynH9zGSYElpslD8FRmNWrXU9\nw0Eq2cEIR8EFZR2TlLZxE2fuwlHXltCya5Pj9zid45TbUQtsz8Mic6gYVQRVW8/G\nvBnYs71uawKJjpIM4ULRm/F4WbHibvEMB1RET9tt7FAVbkpnZu6auGjqyXg0sbvh\nQtPzTv/AhzEJvoyUTC9hgZ/WYXxdKQ/X7fgBRrR+8nuSRduMx2vcOrIYDzt7Z96g\n2zfdIeRE5jscWvJ4Bs5ibV3bHOGr0M/Ad51nEF+IqQKBgQDvaVsGf8ptrez56Hu0\nEwZC4wVW6VOAWjqFZHfye0rIZBMgleB24Cz0qKfeP3JA4ygTvJaso3N8/6gFqfYr\nt8CcQCqRpD1o+xG/HF/7yiLxL/0s0NGKmd8Iao7RsgffM2BpmgJPOocaOHaErpGa\n/W2n10Tjl03nrUvEa5JT3dR17QKBgQDjrHIuASpDQx0/RL/vbD2ogmizLtD0BIuz\nDNAjm20XaxYFitMBMX34fZgDlbk5jqA1o7KuzNZb5anU+hdMea8o5OsK/EmJPzVI\nGf2rhyG6rXWKh20QhOC4nKOhEStkMdxnNKl7lY1Khwjkf/jHNYRYVsjvGgVW6B/P\n37e2HnoQowKBgGz10zKzCGtAhCD9GQfMvMXGUtDKYnGBHy9EmX6ndFKdkUL8U2tm\n/a7f736r+5DikYPiCeVKgq46ILtrLhmZiLTUU0tzp2tXES2ceWa8CYkhoSU7aJKf\nEy3eaV+wmfqQhGmraS+r4H8jgXVDigszGiwQQk8etpsheOFNYAyBYkfFAoGAViTg\nivGb6RlSzqaXrOKardCyBuI24614okW910suysaU7YHqdrAgRs5Wnzyeed2yVrla\nmXMdxGWwjcoW2LPOB74eBOkSdeC5q09SQP1/UJ/jMogtRyvPz2pNK1tQvLd0+oPd\ngMpETKetQK//FHj2W2py2q1QyeJIbyHp4/nCG9sCgYB6S6bmT+vC12tBfwj/5rGn\nVV1gGDw6zrfL3fOs3GjQeQcFZYJzKAREtvpFj/kaMZk3VzYRpWcA3dF+xkuuqAYg\nes7mtfRVIzsxLCqcO0YsHM/ADK0GdW/TUKtCnuExEf/fE6MxdwxacUfTUKTv/t6M\nYTPqhM1zWQ7FZ7D8JqMyTw==\n-----END PRIVATE KEY-----\n',
      client_email: 'wedding-invitation-posong@wedding-invitation-posong.iam.gserviceaccount.com',
      client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
      auth_uri: 'https://accounts.google.com/o/oauth2/auth',
      token_uri: 'https://oauth2.googleapis.com/token',
      auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
      client_x509_cert_url:
        'https://www.googleapis.com/robot/v1/metadata/x509/wedding-invitation-posong%40wedding-invitation-posong.iam.gserviceaccount.com',
      universe_domain: 'googleapis.com',
    };

    await doc.useServiceAccountAuth(credentials);
    await doc.loadInfo();
    return doc;
  } catch (error) {
    console.error('Error fetching Google Sheet:', error);
    throw error;
  }
};

// 구글 시트 조회하는 custom useHook
const useGoogleSheet = (sheetId) => {
  const [googleSheetRows, setGoogleSheetRows] = useState([]);

  const fetchGoogleSheetRows = async () => {
    const googleSheet = await getGoogleSheet();
    const sheetsByIdElement = googleSheet.sheetsById[sheetId];
    const rows = await sheetsByIdElement.getRows();
    setGoogleSheetRows(rows);
  };

  useEffect(() => {
    fetchGoogleSheetRows();
  }, []);

  return [googleSheetRows];
};

export default useGoogleSheet;
