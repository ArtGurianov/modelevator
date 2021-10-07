export default {
  type: "object",
  properties: {
    emailAddress: { type: 'string' },
    otp: { type: 'string'},
  },
  required: ['name']
} as const;
