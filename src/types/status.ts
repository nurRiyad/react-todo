export interface Status {
  status: 'all' | 'not' | 'com';
  handleStatus: (newStatus: 'all' | 'not' | 'com') => void;
}
