const common = {
module.exports = {
  module: {
    rules: [
      {
@@ -10,9 +10,6 @@ const common = {
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        },
        resolve: {
          fullySpecified: false
        }
      },
      {
@@ -27,5 +24,3 @@ const common = {
    extensions: ['.js', '.jsx', '.json']
  }
};

export default common;
