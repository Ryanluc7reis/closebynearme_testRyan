import { PermissionsMenu, Roles } from '../../../_protos/common';
export declare class AuthResponseAdmin {
    id: string;
    accessToken: string;
    email: string;
    fullName: string;
    avatar: string;
    phone: string;
    profile: Roles[];
    permissions: PermissionsMenu[];
}
