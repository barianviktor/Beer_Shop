export interface INotification {
  status: 'SUCCESS' | 'FAILURE';
  message: string;
  link?: {
    message: string;
    linkTo: string[];
  };
}
