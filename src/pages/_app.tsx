import { MenuContextProvider } from "@/context/MenuContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<MenuContextProvider>
			<Component {...pageProps} />
		</MenuContextProvider>
	);
}
