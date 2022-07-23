const mongoose = require("mongoose");

const missionSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
    },
    motifs: {
      type: String,
    },
    depart: {
      type: Date,
      required: true,
    },
    arrivee: {
      type: Date,
      required: true,
    },
    villeD: {
      type: String,
      required: true,
    },
    villeA: {
      type: String,
      required: true,
    },
    chauffeur: {
      type: mongoose.Types.ObjectId,
      ref: "personne",
      required: true,
    },
    init: {
      type: mongoose.Types.ObjectId,
      ref: "personne",
      required: true,
    },
    participant: [
      {
        person: {
          type: mongoose.Types.ObjectId,
          ref: "personne",
          required: true,
        },
        isChief: {
          type: Boolean,
          unique: true,
          required: true,
          default: false,
        },
      },
    ],
    rapport: {
      type: String,
    },
  },
  { timestamps: true }
);

// missionSchema.pre("save", async function (next) {
//   // do stuff
//   next();
// });

module.exports = mongoose.model("mission", missionSchema);
