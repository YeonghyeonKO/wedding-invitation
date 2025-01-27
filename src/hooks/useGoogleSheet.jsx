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
      project_key_id: process.env.REACT_APP_GOOGLE_PRIVATE_KEY_ID,
      private_key: JSON.parse(process.env.REACT_APP_GOOGLE_PRIVATE_KEY),
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
