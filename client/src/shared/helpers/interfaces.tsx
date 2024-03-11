// Type definition for camera information coming in from database
export interface ICameraInfo {
  Location: string;
  alert_thre: number;
  cam_name: string;
  crop_x1: number;
  crop_x2: number;
  crop_y1: number;
  crop_y2: number;
  owner: string;
  status: string;
  time_add: string;
}
