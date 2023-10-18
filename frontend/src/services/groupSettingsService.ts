import axios from 'axios';
import { GroupsConfig } from '~/pages/groupSettings/groupTypes';

export const fetchGroupsSettings = (): Promise<GroupsConfig> => {
  const url = '/api/groups-config';
  return axios
    .get(url)
    .then((response) => response.data)
    .catch((e) => {
      throw new Error(e.response.data.message);
    });
};

export const updateGroupsSettings = (
  settings: GroupsConfig,
): Promise<{ success: GroupsConfig | null; error: string | null }> => {
  const url = '/api/groups-config';
  return axios
    .put(url, settings)
    .then((response) => response.data)
    .catch((e) => {
      throw new Error(e.response.data.message);
    });
};
