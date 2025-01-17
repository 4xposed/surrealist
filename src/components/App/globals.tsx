import type { ReactNode } from "react";
import { useCloudAuthentication } from "~/hooks/cloud";
import { useConnectionSwitch } from "./hooks/connection";
import { useKeybindListener, useModKeyTracker } from "./hooks/input";
import { useConfigRouting } from "./hooks/routing";
import { useTitleSync } from "./hooks/title";
import { useWindowSettings } from "./hooks/window";

export function Globals(): ReactNode {
	useConfigRouting();
	useModKeyTracker();
	useKeybindListener();
	useWindowSettings();
	useConnectionSwitch();
	useCloudAuthentication();
	useTitleSync();

	return;
}
