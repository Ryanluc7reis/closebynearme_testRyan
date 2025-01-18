import { PermissionsMenu, Roles, Status } from '../../../_protos/common';
export declare class CreateAdminInput {
    fullRecord: boolean;
    profile: Roles[];
    status: Status;
    avatar: string;
    email: string;
    password: string;
    fullName: string;
    permissions: PermissionsMenu[];
}
