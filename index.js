const stylisPluginExtraClassNamesSpecifity =
  (...rest) =>
  (element) => {
    const specificity = rest.map((value) => value || 1);

    // we only want type "rule" and no keyframes definitions
    if (element.type !== "rule" || element.root?.type === "@keyframes") {
      return;
    }

    if (element.parent === null && specificity && specificity > 1) {
      element.props = element.props.map((prop) => (/^\.[\w\d-_]+$/i.test(prop) 
        ? prop.repeat(specificity) 
        : prop));
    }
  };

export default stylisPluginExtraClassNamesSpecifity;


