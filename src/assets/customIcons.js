import { h, defineAsyncComponent } from "vue";

// Dynamically import all .vue files in the components/Icons directory
const iconsContext = import.meta.glob("@/components/icons/*.vue");

const iconsComponent = Object.keys(iconsContext).reduce(
  (components, filePath) => {
    const componentName = filePath
      .split("/")
      .pop()
      .replace(/\.\w+$/, "");
    components[componentName.toLowerCase()] = defineAsyncComponent(() =>
      iconsContext[filePath]()
    );
    return components;
  },
  {}
);

const customIcons = {
  component: (props) => {
    const iconName = props.icon.toLowerCase();
    const IconComponent = iconsComponent[iconName];
    if (!IconComponent) {
      console.warn(`Icon component "${props.icon}" not found!!!!`);
      return null;
    }
    return h(IconComponent);
  },
};

export default customIcons;
