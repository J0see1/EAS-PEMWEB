import payload from 'payload';

/** @type {import('payload/types').CollectionConfig} */
const Data = {
  slug: 'Data',
  admin: {
    useAsTitle: 'namaPanjang'
  },
  access: {
    read: () => true,
    update: () => true,
    delete: () => true,
    create: () => true,
  },

  fields: [
    {
        name: "namaPanjang",
        type: "text",
        required: true
    },
    {
        name: "email",
        type: "text",
        required: true
    },
    {
        name: "asalSekolah",
        type: "text",
    },
    {
        name: "status",
        type: "select",
        defaultValue: "Waiting",
        options: [
          {
          label: "waiting",
          value: "waiting",
          },
          {
            label: "Rejected",
            value: "Rejected"
          },
          {
            label: "Accepted",
            value: "Accepted"
          }
        ]
    },
    {
        name: "tanggalPendaftaran",
        type: "date",
    }
  ],
};

export default Data;