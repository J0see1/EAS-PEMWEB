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
        required: true
    },
    {
        name: "status",
        type: "text",
        defaultValue: "Waiting",
    },
    {
        name: "tanggalPendaftaran",
        type: "date",
    }
  ],
};

export default Data;