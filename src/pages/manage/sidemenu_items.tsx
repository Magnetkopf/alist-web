import { SideMenuItemProps } from "./SideMenu"
import { Component, lazy } from "solid-js"
import { Group, UserRole } from "~/types"

export type SideMenuItem = SideMenuItemProps & {
  component?: Component
  children?: SideMenuItem[]
}

const CommonSettings = lazy(() => import("./settings/Common"))

export const side_menu_items: SideMenuItem[] = [
  {
    title: "manage.sidemenu.dashboard",
    icon: "mdi-view-dashboard",
    to: "/@manage",
    component: () => lazy(() => import("./Dashboard")),
  },
  {
    title: "manage.sidemenu.settings",
    icon: "mdi-cog",
    to: "/@manage/settings",
    children: [
      {
        title: "manage.sidemenu.site",
        icon: "mdi-cog-outline",
        to: "/@manage/settings/site",
        component: () => <CommonSettings group={Group.SITE} />,
      },
      {
        title: "manage.sidemenu.style",
        icon: "mdi-palette-outline",
        to: "/@manage/settings/style",
        component: () => <CommonSettings group={Group.STYLE} />,
      },
      {
        title: "manage.sidemenu.preview",
        icon: "mdi-play-circle-outline",
        to: "/@manage/settings/preview",
        component: () => <CommonSettings group={Group.PREVIEW} />,
      },
      {
        title: "manage.sidemenu.global",
        icon: "mdi-earth",
        to: "/@manage/settings/global",
        component: () => <CommonSettings group={Group.GLOBAL} />,
      },
      {
        title: "manage.sidemenu.sso",
        icon: "mdi-account-key-outline",
        to: "/@manage/settings/sso",
        component: () => <CommonSettings group={Group.SSO} />,
      },
      {
        title: "manage.sidemenu.ldap",
        icon: "mdi-account-key-outline",
        to: "/@manage/settings/ldap",
        component: () => <CommonSettings group={Group.LDAP} />,
      },
      {
        title: "manage.sidemenu.s3",
        icon: "mdi-bucket-outline",
        to: "/@manage/settings/s3",
        component: lazy(() => import("./settings/S3")),
      },
      {
        title: "manage.sidemenu.ftp",
        icon: "mdi-folder-outline",
        to: "/@manage/settings/ftp",
        component: () => <CommonSettings group={Group.FTP} />,
      },
      {
        title: "manage.sidemenu.traffic",
        icon: "mdi-arrow-left-right",
        to: "/@manage/settings/traffic",
        component: () => <CommonSettings group={Group.TRAFFIC} />,
      },
      {
        title: "manage.sidemenu.other",
        icon: "mdi-dots-horizontal",
        to: "/@manage/settings/other",
        component: lazy(() => import("./settings/Other")),
      },
    ],
  },
  {
    title: "manage.sidemenu.tasks",
    icon: "mdi-checkbox-marked-circle",
    to: "/@manage/tasks",
    role: UserRole.GENERAL,
    children: [
      {
        title: "manage.sidemenu.offline_download",
        icon: "mdi-magnet",
        to: "/@manage/tasks/offline_download",
        role: UserRole.GENERAL,
        component: lazy(() => import("./tasks/offline_download")),
      },
      // {
      //   title: "manage.sidemenu.aria2",
      //   icon: "mdi-cloud-download",
      //   to: "/@manage/tasks/aria2",
      //   component: lazy(() => import("./tasks/Aria2")),
      // },
      // {
      //   title: "manage.sidemenu.qbit",
      //   icon: "mdi-cloud-download",
      //   to: "/@manage/tasks/qbit",
      //   component: lazy(() => import("./tasks/Qbit")),
      // },
      {
        title: "manage.sidemenu.upload",
        icon: "mdi-cloud-upload-outline",
        to: "/@manage/tasks/upload",
        role: UserRole.GENERAL,
        component: lazy(() => import("./tasks/Upload")),
      },
      {
        title: "manage.sidemenu.copy",
        icon: "mdi-content-copy",
        to: "/@manage/tasks/copy",
        role: UserRole.GENERAL,
        component: lazy(() => import("./tasks/Copy")),
      },
      {
        title: "manage.sidemenu.decompress",
        icon: "mdi-archive-outline",
        to: "/@manage/tasks/decompress",
        role: UserRole.GENERAL,
        component: lazy(() => import("./tasks/Decompress")),
      },
    ],
  },
  {
    title: "manage.sidemenu.users",
    icon: "mdi-account-circle",
    to: "/@manage/users",
    component: lazy(() => import("./users/Users")),
  },
  {
    title: "manage.sidemenu.storages",
    icon: "mdi-database",
    to: "/@manage/storages",
    component: lazy(() => import("./storages/Storages")),
  },
  {
    title: "manage.sidemenu.metas",
    icon: "mdi-package",
    to: "/@manage/metas",
    component: lazy(() => import("./metas/Metas")),
  },
  {
    title: "manage.sidemenu.indexes",
    icon: "mdi-magnify",
    to: "/@manage/indexes",
    component: lazy(() => import("./indexes/indexes")),
  },
  {
    title: "manage.sidemenu.backup-restore",
    to: "/@manage/backup-restore",
    icon: "mdi-database-cog",
    component: lazy(() => import("./backup-restore")),
  },
  {
    title: "manage.sidemenu.profile",
    icon: "mdi-account",
    to: "/@manage/profile",
    role: UserRole.GUEST,
    component: lazy(() => import("./users/Profile")),
  },

  {
    title: "manage.sidemenu.home",
    icon: "mdi-home",
    to: "/",
    role: UserRole.GUEST,
    refresh: true,
  },
]
