export const renderTaxStatement = outlet => {
  return `Prices are ${outlet.taxinclusive ? `inclusive` : `exclusive`} of ${
    outlet.tax
  }% ${outlet.taxlabel}.`;
};
