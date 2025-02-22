import React from "react";
import Layout from "../../components/layouts/Layout";
import { Outlet } from "react-router-dom";
import SettingsMenu from "../../components/setting_menu/SettingsMenu";
import { AnimatePresence, motion } from "framer-motion";

const SettingLayout: React.FC = () => {
  return (
    <Layout>
      <main style={styles.setting_content_wrapper}>
        <div style={styles.setting_sidebar}>
          <SettingsMenu />
        </div>
        <div style={styles.setting_content}>
          <AnimatePresence mode="wait">
            <motion.div
              key={1}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-full"
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </Layout>
  );
};
const styles: { [key: string]: React.CSSProperties } = {
  setting_content_wrapper: {
    display: "flex",
    gap: 2,
    paddingBottom: 30,
  },
  setting_content: {
    flexBasis: "85%",
  },
};
export default SettingLayout;
