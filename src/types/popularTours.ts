export interface LaunchProps {
  id: string;
  details: string;
  mission_name: string;
}

export interface ExtendedLaunchProps extends LaunchProps {
  favorite: boolean;
}

export interface ChangeOffsetOptionsProps {
  dotIndex?: number;
}

export interface ChangeOffsetProps {
  isPlus?: boolean;
  options?: ChangeOffsetOptionsProps;
}
