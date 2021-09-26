export interface Organization {
  readonly id: string;
  readonly name: string;
}

export interface User {
  readonly id: string;
  readonly organizationId: string;
  readonly fullName: string;
}

export interface Task {
  readonly id: string;
  readonly organizationId: string;
  readonly addedByUserId: string;
  readonly addedAt: Date;
  readonly assigneeUserId: string;
  readonly title: string;
  readonly description: string;
}
