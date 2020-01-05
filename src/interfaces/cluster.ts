export interface Cluster {
  id: string,
  name: string,
  manager: string,
}

export interface ClusterInput {
  managerId: string,
  name: string,
}