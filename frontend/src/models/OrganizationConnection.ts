import { Organization } from "./Organization";

export interface OrganizationConnection {
    totalCount: number;
    nodes?: Organization[]
}