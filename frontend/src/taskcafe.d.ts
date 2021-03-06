interface JWTToken {
  userId: string;
  orgRole: string;
  iat: string;
  exp: string;
}

interface DraggableElement {
  id: string;
  position: number;
}

type ContextMenuEvent = {
  left: number;
  top: number;
  width: number;
  taskID: string;
  taskGroupID: string;
};

type Role = {
  code: string;
  name: string;
};

type UserProject = {
  id: string;
  name: string;
};

type UserTeam = {
  id: string;
  name: string;
};

type RelatedList = {
  teams: Array<UserTeam>;
  projects: Array<UserProject>;
};

type OwnedList = {
  projects: Array<string>;
  teams: Array<string>;
};

type TaskUser = {
  id: string;
  fullName: string;
  email?: string;
  bio?: string;
  profileIcon: ProfileIcon;
  username?: string;
  role?: Role;
};

type User = TaskUser & {
  email?: string;
  member: RelatedList;
  owned: RelatedList;
};

type RefreshTokenResponse = {
  accessToken: string;
  isInstalled: boolean;
};

type LoginFormData = {
  username: string;
  password: string;
};

type RegisterFormData = {
  username: string;
  fullname: string;
  email: string;
  password: string;
  password_confirm: string;
  initials: string;
};

type DueDateFormData = {
  endDate: string;
  endTime: string;
};
type ErrorOption =
  | {
      types: MultipleFieldErrors;
    }
  | {
      message?: Message;
      type: string;
    };

type RegisterProps = {
  onSubmit: (
    data: RegisterFormData,
    setComplete: (val: boolean) => void,
    setError: (name: 'username' | 'email' | 'password' | 'password_confirm' | 'initials', error: ErrorOption) => void,
  ) => void;
};

type LoginProps = {
  onSubmit: (
    data: LoginFormData,
    setComplete: (val: boolean) => void,
    setError: (name: 'username' | 'password', error: ErrorOption) => void,
  ) => void;
};

type ElementPosition = {
  top: number;
  left: number;
  right: number;
  bottom: number;
};

type ElementSize = {
  width: number;
  height: number;
};

type OnCardMemberClick = ($targetRef: RefObject<HTMLElement>, taskID: string, memberID: string) => void;

type ElementBounds = {
  size: ElementSize;
  position: ElementPosition;
};

type CardLabelVariant = 'large' | 'small';
